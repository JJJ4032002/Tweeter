import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 600,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    "&:before": {
      boxShadow: theme.shadows[2],
    },
    "&:after": {
      boxShadow: theme.shadows[2],
    },
  },
}));

export default LightTooltip;
