import styled from "@emotion/styled";
import { Box } from "@mui/system";
import footer from "../../assets/images/footer.svg";

export const FooterContainer = styled(Box)(() => ({
  background: "#ffffff",
  width: "100%",
  // margin: -40,
  marginTop: "35px",
  position: "absolute",
  minHeight: "255px",

  left: 0,
}));

export const BootomFooter = styled(Box)(() => ({
  height: "20px",
  width: "100%",
  margin: 0,
  marginTop: "0px",
  backgroundImage: `url(${footer})`,
  backgroundRepeat: "repeat",
  maxHeight: "16px",
  position: "relative",
}));
