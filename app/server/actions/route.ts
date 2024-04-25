'use server';

import { db } from "@/app/custom/db/db";


export  async function NewPost(data: { title: string; content: string; author: string; }) {
   
    try {
        // Send data to the database
        await db.post.create({
          data: {
            title: data.title,
            content: data.content,
            Author: data.author,
          },
        });

        // Show a console log
        console.log("Data sent to the database:", data);
    } catch (error) {
        console.error("Error sending data to the database:", error);
    }
}


export async function getPosts() {
    const posts = await db.post.findMany();
    console.log(posts);
}
