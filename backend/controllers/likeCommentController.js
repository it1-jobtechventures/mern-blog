import blogModel from "../models/blogModel.js";
import commentModel from "../models/commentModel.js";

// // Like a Blog
// const likeBlog = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const blog = await blogModel.findById(id);
//         if (!blog) {
//             return res.status(404).json({ success: false, message: "Blog not found" });
//         }
//         blog.likes += 1;
//         await blog.save();
//         res.status(200).json({ success: true, data: blog });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };
const likeBlog = async (req, res) => {
    const { id } = req.params;
    const { toggle } = req.body; // Determine whether to add or remove the like

    try {
        const blog = await blogModel.findById(id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        if (toggle) {
            blog.likes += 1; // Add a like
        } else {
            blog.likes = Math.max(0, blog.likes - 1); // Remove a like but ensure it doesn't go below 0
        }

        await blog.save();
        res.status(200).json({ success: true, data: blog });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
}
// Add a comment to a blog post
const addComment = async (req, res) => {
    try {
        const { text } = req.body;
        const blogId = req.params.id;
        // Create the new comment
        const newComment = new commentModel({ text, blog: blogId,});
        // Save the comment
        await newComment.save();
        // Find the blog and update it with the new comment
        const blog = await blogModel.findById(blogId);
        blog.comments.push(newComment);
        await blog.save();
        res.status(200).json({ success: true, message: 'Comment added successfully!', data: newComment,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error adding comment',});
    }
};

// Get comments for a specific blog post
const getComments = async (req, res) => {
    try {
        const blogId = req.params.id;
        // Find the blog and populate comments
        const blog = await blogModel.findById(blogId).populate('comments');
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found',});
        }
        res.status(200).json({ success: true, data: blog.comments,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error fetching comments',});
    }
};

export { addComment, getComments,likeBlog};
