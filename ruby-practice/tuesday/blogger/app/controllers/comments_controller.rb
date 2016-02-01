class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:post_id])
    # @comment = Comment.new(comment_params)   # the string from comment_params gets fed in as the new comment
    # @comment.post_id = @post.id
    # instead of the two lines above, we can just use "build":
    @comment = @post.comments.build(comment_params)

    if !@comment.save
      flash[:error] = "Comment failed to save"
    end
    redirect_to post_path(@post)
  end

  def destroy
    @comment = Comment.find(params[:id])
    @post = @comment.post
    if !@comment.destroy
      flash[:error] = "Comment failed to delete"
    end
    redirect_to posts_path(:id => @post.id) # or root_path
  end

  private
  def comment_params
    params.require(:comment).permit(:body)  # returns {:body = "a string"}
  end

end
