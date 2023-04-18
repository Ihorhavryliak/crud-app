import List from "@mui/joy/List";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalOverflow from "@mui/joy/ModalOverflow";
import Typography from "@mui/joy/Typography";
type ModalUsersType = {
  setLayout: React.Dispatch<
    React.SetStateAction<"center" | "fullscreen" | undefined>
  >;
  layout: "center" | "fullscreen" | undefined;
  children: JSX.Element;
  h: string;
};

export const ModalUsers = (props: ModalUsersType) => {
  const { children, setLayout, layout, h } = props;
  return (
    <Modal
      open={!!layout}
      onClose={() => {
        setLayout(undefined);
      }}
    >
      <ModalOverflow>
        <ModalDialog
          aria-labelledby="modal-dialog-overflow"
          layout={layout}
          sx={{ width: "600px", bottom: "24px" }}
        >
          <ModalClose />
          <Typography id="modal-dialog-overflow" component="h2">
            {h}
          </Typography>

          <List>{children}</List>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};
