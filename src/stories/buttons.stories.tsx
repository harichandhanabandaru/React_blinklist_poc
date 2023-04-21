import { Button } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
export default
{
    title:"atoms/Button",
component:Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
    <Button {...args} />
  );

  export const Finished: ComponentStory<typeof Button> = Template.bind({});
Finished.args = {
  variant: "text",
  children: "Finished",
};


export const ReadAgain: ComponentStory<typeof Button> = Template.bind({});
ReadAgain.args = {
  variant: "text",
  children: "Read Again",
};


