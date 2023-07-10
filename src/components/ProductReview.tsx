import { usePostCommentMutation } from '@/redux/api/apiSlice';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const dummyComments = [
  'Bhalo na',
  'Ki shob ghori egula??',
  'Eta kono product holo ??',
  '200 taka dibo, hobe ??',
];

export default function ProductReview() {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [postComment, { isLoading, isSuccess, isError }] =
    usePostCommentMutation();

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
    setInputValue(undefined);
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
        {dummyComments.map((comment, index) => (
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
