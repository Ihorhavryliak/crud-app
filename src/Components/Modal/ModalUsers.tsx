import { useState } from "react";
import List from "@mui/joy/List";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";

type ModalUsersType = {
  setLayout: React.Dispatch<React.SetStateAction<"center" | "fullscreen" | undefined>>;
  layout: "center" | "fullscreen" | undefined;
  children: JSX.Element;
};


export const ModalUsers = (props: ModalUsersType) => {
  const { children, setLayout, layout } = props;
  const [scroll, setScroll] = useState<boolean>(true);
  return (
    <Modal
      open={!!layout}
      onClose={() => {
        setLayout(undefined);
      }}
    >
      <ModalDialog
        aria-labelledby="dialog-vertical-scroll-title"
        layout={layout}
        style={{ width: "600px" }}
      >
        <ModalClose />
        <Typography id="dialog-vertical-scroll-title" component="h2">
          Create user
        </Typography>

        <List
          sx={{
            overflow: scroll ? "scroll" : "initial",
            mx: "calc(-1 * var(--ModalDialog-padding))",
            px: "var(--ModalDialog-padding)",
          }}
        >
          {children}
        </List>
      </ModalDialog>
    </Modal>
  );
};
