const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { MessageType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    // project: {
    //   type: ProjectType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parentValue, args) {
    //     const query = `SELECT * FROM project WHERE id=$1`;
    //     const values = [args.id];

    //     return db
    //       .one(query, values)
    //       .then(res => res)
    //       .catch(err => err);
    //   }
    // },
    message: {
      type: MessageType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM messages;`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;