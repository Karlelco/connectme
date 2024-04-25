import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});


export const saveStorageId = mutation({
  args: {
    image: v.string(),
  },
  handler: async (ctx, args) => {
    const addImage = await ctx.db.insert("images", {
      image: args.image,
    });

    console.log("Added new document:", addImage);
  },
});

export const saveStorage = mutation({
  args: {
    image: v.string(),
  },
  handler: async (ctx, args) => {
    const addImage = await ctx.db.insert("images", {
      image: args.image,
    });

    console.log("Added new document:", addImage);
  },
});

// query the images
export const getImages = query({
  args: {},
  handler: async (ctx) => {
    const images = await ctx.db.query("images").collect();
    const imageList = await Promise.all(
      images.map(async (image) => {
        return {
          _id: image._id,
          image: image.image,
        };
      })
    );
  },
});

