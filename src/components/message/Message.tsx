import "./Message.css";

import { FunctionComponent } from "react";
import { Button, Card } from "..";

interface MessageArgs {
  description: string;
  title: string;
}
const Message: FunctionComponent<MessageArgs> = ({ description, title }) => {
  return (
    <Card className="Message">
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="btn-container">
          <Button text="Go home" to={"/"} type="link" />
        </div>
      </>
    </Card>
  );
};

export default Message;
