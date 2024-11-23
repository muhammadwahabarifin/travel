import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  imageUrl: string;
  review: string;
  name: string;
  position: string;
}

function TestimonialCard({ imageUrl, review, name, position }: IProps) {
  return (
    <div className="bg-[#dce1aa] rounded-lg relative p-4 md:p-[40px]">
      <p className="text-textLight">{review}</p>
      <div className="my-[20px]">
        <img src="images/star_group.png" alt="star group" />
      </div>

      <div>
        <p className={cn("text-[24px]")}>{name}</p>
        <p>{position}</p>
      </div>

      <div className="hidden md:block absolute left-[40px] -top-8">
        <Avatar className="w-[60px] h-[60px]">
          <AvatarImage src={imageUrl} alt="reviewer avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default TestimonialCard;
