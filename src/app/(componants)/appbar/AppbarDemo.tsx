// "use client";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { useTheme } from "@mui/material";
// import { useColorMode } from "@/app/ThemeRegistry";
// import Brightness5Icon from "@mui/icons-material/Brightness5";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import UserList from "./../user-list/page";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = ["User", "Setting"];

// export default function DrawerAppBar(props: Props) {
//   const { mode, toggleColorMode } = useColorMode();
//   const theme = useTheme();
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         sx={{ backgroundColor: theme.palette.custom.teal }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{ display: { xs: "none", sm: "block" } }}
//             >
//               User Dashboard
//             </Typography>
//           </Box>
//           <IconButton onClick={toggleColorMode} color="inherit">
//             {mode === "dark" ? (
//               <Brightness5Icon sx={{ color: "#e65100" }} />
//             ) : (
//               <NightlightIcon sx={{ color: "#f5f5f5" }} />
//             )}
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           backgroundColor: theme.palette.custom.gray,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }
