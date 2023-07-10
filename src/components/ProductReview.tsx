import {
  useGetCommentsQuery,
  usePostCommentMutation,
} from '@/redux/api/apiSlice';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from './ui/use-toast';

export default function ProductReview({ id }: any) {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [postComment, { isLoading, isSuccess, isError }] =
    usePostCommentMutation();

  const { data } = useGetCommentsQuery(id);
  console.log(data);

  console.log(isLoading);
  console.log(isSuccess);
  console.log(isError);

  const handlePostComment = () => {
    const options = {
      id: id,
      data: {
        comment: inputValue,
      },
    };
    postComment(options);
    toast({
      description: 'Comment added successfully',
    });
    setInputValue('');
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <Textarea
          className="min-h-[30px]"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          className="rounded-full h-10 w-10 p-2 text-[25px]"
          onClick={handlePostComment}
        >
          <FiSend />
        </Button>
      </div>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
