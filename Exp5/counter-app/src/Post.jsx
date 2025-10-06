import Post from "./Post";

const App = () => {
  return (
    <div>
      <Post 
        title="Amazing Sunset!" 
        description="Look at this beautiful sunset I captured yesterday 🌅"
        initialLikes={5}
        initialViews={120}
      />
      <Post 
        title="Delicious Pizza 🍕"
        description="Homemade pizza for dinner!"
        initialLikes={2}
        initialViews={50}
      />
    </div>
  );
};

export default App;
