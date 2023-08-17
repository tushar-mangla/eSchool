import { useDashboardContext } from "../pages/Dashboard";
import { Avatar, Typography, Box, Container } from "@mui/material";

const Profile = () => {
  const { user } = useDashboardContext();

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Avatar
            src={user?.user?.avatar}
            alt={user?.user?.name}
            sx={{
              width: 100,
              height: 100,
              mb: 2,
            }}
          />
          <Typography variant="h4" gutterBottom>
            {user?.user?.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {user?.user?.email}
          </Typography>
        </Box>
      </Container>

      {/* <div>
        {user?.user?.avatar ? (
          <img
            src={user.user.avatar}
            alt={`${user.user.name} `}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ) : (
          <FaUser size={150} style={{ color: "#ccc" }} />
        )}
        <p>First Name: {user?.user?.name}</p>
        <h5>Email : {user?.user?.email}</h5>
      </div> */}
    </div>
  );
};

export default Profile;
