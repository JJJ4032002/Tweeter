import React from "react";
import LightTooltip from "./LightTooltip";
import UserStatus from "../UserStatus";
import SignOutOption from "../SignOutOption";
import { User } from "firebase/auth";
import { ClickAwayListener } from "@mui/material";
function SignOutTooltip({
  children,
  user,
  clickable,
}: {
  children: React.ReactNode;
  user: User | null;
  clickable: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {!clickable ? (
        <LightTooltip
          title={
            <>
              <UserStatus user={user} className="Tooltip"></UserStatus>
              <SignOutOption
                text={`Log out ${user?.displayName}`}
              ></SignOutOption>
            </>
          }
        >
          <div>{children}</div>
        </LightTooltip>
      ) : (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <LightTooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <>
                  <UserStatus user={user} className="Tooltip"></UserStatus>
                  <SignOutOption
                    text={`Log out ${user?.displayName}`}
                  ></SignOutOption>
                </>
              }
            >
              <div onClick={handleTooltipOpen}>{children}</div>
            </LightTooltip>
          </div>
        </ClickAwayListener>
      )}
    </>
  );
}

export default SignOutTooltip;