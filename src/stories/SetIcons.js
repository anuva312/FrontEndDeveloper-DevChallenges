import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";

const fontSize = "1.3em";
export default function SetIcons({ iconName }) {
  if (iconName) {
    if (iconName === "delete") {
      return <DeleteIcon sx={{ fontSize }} />;
    } else if (iconName === "visibility") {
      return <VisibilityIcon sx={{ fontSize }} />;
    } else if (iconName === "search") {
      return <SearchIcon sx={{ fontSize }} />;
    } else if (iconName === "lock") {
      return <LockIcon sx={{ fontSize }} />;
    } else if (iconName === "shoppingCart") {
      return <ShoppingCartIcon sx={{ fontSize }} />;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
