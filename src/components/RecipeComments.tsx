
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquare, User } from "lucide-react";
import { toast } from "sonner";

interface Comment {
  id: string;
  username: string;
  content: string;
  date: Date;
}

interface RecipeCommentsProps {
  recipeId: string;
}

const RecipeComments = ({ recipeId }: RecipeCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem(`comments-${recipeId}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("Guest");

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast.error("Please write a comment first");
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      username,
      content: newComment,
      date: new Date(),
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    setNewComment("");
    
    // Save to localStorage
    localStorage.setItem(`comments-${recipeId}`, JSON.stringify(updatedComments));
    toast.success("Comment added successfully!");
  };

  return (
    <div className="mt-8 border-t pt-6 no-print">
      <h2 className="text-2xl font-heading font-bold text-recipe-secondary mb-4 flex items-center">
        <MessageSquare className="mr-2" size={20} />
        Comments
      </h2>

      <div className="mb-4">
        <div className="mb-2">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
            placeholder="Enter your name"
          />
        </div>
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts on this recipe..."
          className="min-h-[100px] mb-2"
        />
        <Button 
          onClick={handleAddComment}
          className="bg-recipe-primary hover:bg-recipe-secondary text-white"
        >
          Add Comment
        </Button>
      </div>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-recipe-dark/70 italic">Be the first to comment on this recipe!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="bg-recipe-primary/10 rounded-full p-2 mr-2">
                  <User size={16} className="text-recipe-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-recipe-secondary">{comment.username}</h4>
                  <p className="text-xs text-gray-500">
                    {new Date(comment.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-recipe-dark">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeComments;
