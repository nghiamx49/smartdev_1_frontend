import { RiStarFill } from "react-icons/ri";

import * as FS from './style';

const FeedbackItem = ({ item }) => {
    return (
        <FS.FeedbackDetail>
            <div>
                <FS.ImgUserFeedback src={item.avatar_source}  />
            </div>
            <div>
                <div>{item.username}</div>
                <FS.StarDetail>
                    <RiStarFill/>

                </FS.StarDetail>
                <FS.CommentDetail>{item.comment}</FS.CommentDetail>
                <FS.DateCreateFeeadback>{item.create_at}</FS.DateCreateFeeadback>


            </div>
        </FS.FeedbackDetail>
    );
};

export default FeedbackItem;