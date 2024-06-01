<script>
  let user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A brief bio about John Doe. This section can include interests, background, or anything else you want to share.",
    profilePicture: "https://via.placeholder.com/150"
  };

  function handleEditProfile() {
    // Logic to handle editing the profile
    console.log("Edit profile clicked");
  }

  import { Button } from '$lib/components/ui/button';
</script>

<div class="profile-container">
  <div class="profile-header">
    <img src={user.profilePicture} alt="Profile Picture" class="profile-picture">
    <h1 class="profile-name">{user.name}</h1>
  </div>
  <div class="profile-info">
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Bio:</strong> {user.bio}</p>
  </div>
  <Button class="edit-button" on:click={handleEditProfile}>Edit Profile</Button>
</div>

<style>
  .profile-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: #f7f7f7;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .profile-name {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .profile-info {
    text-align: left;
    font-size: 1.1rem;
    color: #555;
  }

  .profile-info p {
    margin-bottom: 1rem;
  }

  .edit-button {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }

  .edit-button:hover {
    background-color: #333;
  }
</style>
