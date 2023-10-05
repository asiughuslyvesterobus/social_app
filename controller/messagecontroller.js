const {
  BadRequestError,
  NotFoundError,
  Unauthorized
} = require("../lib/error");
const {
  addMessageToConversation
} = require("../lib/helpers.js/functions/messagefunctions");
const {
  validateMessage,
  validateGroup
} = require("../lib/validation/messagevalidation");
const User = require("../models/user");
const Message = require("../models/messages");

//@Method: POST /message/:userid
//@Desc:to send a message to another profile
//@Access:private

const message = async (req, res, next) => {
  const userId = req.user._id;
  const query = req.params.userId;

  //   prevent user from messaging themselves
  if (userId.toString() === query) {
    throw new BadRequestError("you cannot send yourself a message");
  }

  //   get sender and receiver
  const sender = await User.findById(userId);
  const receiver = await User.findById(query);

  if (!receiver) {
    throw new BadRequestError("User not found");
  }

  const error = await validateMessage(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const { textMessage } = req.body;

  //   get sender inbox
  const senderInbox = await User.findById(userId)
    .populate({
      path: "profile.inbox.user",
      model: "User"
    })
    .select("profile.inbox");

  // check if recevier is in sender inbox
  const hasSeenMessage = senderInbox.profile.inbox.find(
    (inboxItem) => String(inboxItem.user._id) === String(receiver.id)
  );

  //   remove receiver from sender inbox
  if (hasSeenMessage) {
    await User.findOneAndUpdate(
      { _id: sender._id },
      { $pull: { "profile.inbox": { user: receiver._id } } }
    );
  }

  //   check for ongoing conversation
  const haveConversation = await Message.findOne({
    conversers: [userId, receiver._id]
  }).populate("message.sender", "profile.userName");

  const receiverId = receiver._id;

  //   add message to ongoing conversation
  if (haveConversation) {
    const response = await addMessageToConversation(
      haveConversation,
      textMessage,
      receiver,
      sender,
      { userId, receiverId }
    );

    res.status(200).json(response);
    return;
  }

  //   initialize new conversatiom
  const message = new Message({
    conversers: [userId, receiver._id],
    messages: [{ sender: userId, message: textMessage }]
  });
  await message.save();

  //   send notification to inbox
  receiver.profile.inbox.push({
    user: userId,
    userName: sender.profile.userName
  });

  await receiver.save();
  res.status(200).json({ message: "message sent" });
};
//@Method: POST /message/:userId/view
//@Desc:to view messages with a given profile
//@Access:private

const getMessages = async (req, res, next) => {
  // retrieve user and receiver id
  const userId = req.user._id;
  const messageId = req.params.messageId;

  //   find user and receiver
  const user = await User.findById(userId);

  //   find conversation and populate sender field with profile.userName
  const conversation = await Message.findOne({
    _id: messageId
  }).populate("messages.sender", "profile.userName");

  if (!conversation) {
    throw new NotFoundError(`message not found`);
  }
  if (!conversation.conversers.includes(userId)) {
    throw new Unauthorized("you are not permitted to view these message");
  }
  // map through conversation to select necessary properties
  const modifiedConversation = conversation.messages.map((message) => ({
    sender: message.sender.profile.userName,
    message: message.message
  }));
  let modifiedConversationLength = modifiedConversation.length;

  // make userName for user = you
  for (i = 0; i < modifiedConversationLength; i++) {
    if (modifiedConversation[i].sender === user.profile.userName) {
      modifiedConversation[i].sender = "you";
    }
  }
  res.status(200).json({ modifiedConversation });
};

//@Method:POST api /message/group
//@Desc:to create a group
//@Access:private

const createGroup = async (req, res, next) => {
  const userId = req.user._id;

  const error = await validateGroup(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const { userNames } = req.body;

  // find the provided usernames
  const users = await User.find({ "profile userName": { $in: userNames } });


  // get the usernames of the profiles found
  const foundUsernames = users.map((user) => user.profile.userName);

  // check if there are users that were not found
  const foundUsers = userNames.filter((item) => !foundUsernames.includes(item));
  if (foundUsers.length < 3) {
    res.status(404).json({ message: `Users ${foundUsers} not found` });
    return;
  }

  // get all the user ids of the group members
  const userIds = users.map((user) => user._id);
  userIds.push(userId);

  // fix the need to add message
  const message = new Message({
    conversers: userIds,
    messages: [{ sender: userId }]
  });

  await message.save();
  res.status(200).json({ message: "Group created successfully" });
};
//@Method:POST /message/:groupId/message
//@Desc:to message a group
//@Access:private

const messageGroup = async (req, res, next) => {
  const userId = req.user._id;
  const query = req.params.groupId;
  const group = await Message.findById(query).populate(
    "messages.sender",
    "profile.userName"
  );
  if (!group) {
    throw new BadRequestError("group does not exist");
  }
  // check if user is a member of the group
  const aMember = group.conversers.includes(userId);
  if (!aMember) {
    throw new Unauthorized("You are not a member of this group");
  }

  const { textMessage } = req.body;
  // create message object
  const message = {
    sender: userId,
    message: textMessage
  };

  // push message object
  group.messages.push(message);
  await group.save();

  const populateGroup = await Message.findById(query).populate(
    "messages.sender",
    "profile.userName"
  );
  const conUsernames = populateGroup.messages.map((message) => ({
    sender: message.sender.profile.userName,
    message: message.message
  }));
  res.status(200).json({ message: "message sent", conUsernames });
};

module.exports.message = message;
module.exports.getMessages = getMessages;
module.exports.createGroup = createGroup;
module.exports.messageGroup = messageGroup;
