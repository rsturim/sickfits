const { Prisma } = require("prisma-binding");

const Mutations = {
    async createItem(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createItem(
            {
                data: {
                    ...args,
                },
            },
            info,
        );
        console.log("item: ", item);
        console.log("------------------------------------------");
        return item;
    },
};

module.exports = Mutations;
