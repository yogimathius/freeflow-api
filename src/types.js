const { GraphQLBoolean } = require("graphql");
const { GraphQLInt } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const MessageType = new GraphQLObjectType({
  name: "Message",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    sender_id: { type: GraphQLInt },
    receiver_id: { type: GraphQLInt },
    receiver_read: { type: GraphQLBoolean },
    text_body: { type: GraphQLString },
    time_sent: { type: GraphQLString},
    active: { type: GraphQLBoolean }
  }
});

// const ProjectType = new GraphQLObjectType({
//   name: "Project",
//   type: "Query",
//   fields: {
//     id: { type: GraphQLString },
//     creator_id: { type: GraphQLString },
//     created: { type: GraphQLString },
//     title: { type: GraphQLString },
//     description: { type: GraphQLString }
//   }
// });

exports.MessageType = UserType;
// exports.ProjectType = ProjectType;