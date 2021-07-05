import { RiStarFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";

import * as FS from './style';

const FeedbackItem = ({ item }) => {

    return (
        <FS.FeedbackDetail>
            <div>
                <FS.ImgUserFeedback src={item.avatar_source} />
            </div>
            <div>
                <div>{item.username}</div>
                    {(() => {
                        switch (item.start) {
                            case 1:
                                return <FS.StarDetail><RiStarFill /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></FS.StarDetail>;
                            case 2:
                                return <FS.StarDetail><RiStarFill /><RiStarFill /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></FS.StarDetail>;
                            case 3:
                                return <FS.StarDetail><RiStarFill /><RiStarFill /><RiStarFill /><AiOutlineStar /><AiOutlineStar /></FS.StarDetail>;
                            case 4:
                                return <FS.StarDetail><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><AiOutlineStar /></FS.StarDetail>;
                            case 5:
                                return <FS.StarDetail><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /></FS.StarDetail>;
                            default:
                                return <FS.StarDetail><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></FS.StarDetail>;
                        }
                    })()}
                <FS.CommentDetail>{item.comment}</FS.CommentDetail>
                <FS.DateCreateFeeadback>{item.create_at}</FS.DateCreateFeeadback>
            </div>
        </FS.FeedbackDetail>
    );
};

export default FeedbackItem;