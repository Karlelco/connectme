import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";


export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});


export const Images= mutation({
  args: {
    fileId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const addImage = await ctx.db.insert('files', {
      fileId: args.fileId,
    })
    
    console.log("Added new document:", addImage);
  }
})

export const showImages = query({
  args: {},
  handler: async (ctx) => {
    const list = await ctx.db.query('files').collect();
    return list.map((file) => {
      return (
        {
          _id: file._id,
          fileId: file.fileId,
        }
      
      )
    })
       

  }
});

export const imageUrl = (fileId: Id<"_storage">): string => {
  const imageUrl = `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${fileId}`;
  return imageUrl;
}