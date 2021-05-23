Description


This project was realized with React Native.

Additional install:
- @react-native-async-storage/async-storage (saving Auth Token)
- react-native-elements (creating News Cards)
- @react-navigation (navigation between the Tabs)

Navigation Tabs include three buttons: Home, News, Profile

Tabs Navigation:

 <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="News" component={NewsStackScreen} />
        <Tabs.Screen name="Profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
    </NavigationContainer>



There are four main Screens in the App described in file Screen.js:
- Home (main Welcome Screen)
- News (includes News posts)
- Profile (personal user info)
- Login (sign in screen)



 Main Screen:

  export const HomeScreen = ({ navigation }) => (
    <ScreenContainer>
      <Text style={styles.logo}>WELCOME!</Text>
     
    </ScreenContainer>
  );


 News Screen:

 const Newslist = () => {
      return array.map((list) => {
        return (
          <Card
          key={list.key}
          featuredTitle={list.title}
          featuredTitleStyle={styles.featuredTitleStyle}
          image={{
            uri: list.img_url || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {list.description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.noteStyle}>{list.src}</Text>
           
          </View>
        </Card>
        );
      });
    };

    return  <ScreenContainer>{Newslist()}</ScreenContainer>; 
};

 Profile Screen:

 export const ProfileScreen = ({ navigation }) => (
    <ScreenContainer>
      <Text>Profile Page Screen</Text>
    
    </ScreenContainer>
  );

 Login Screen:

export const LogInScreen = ({ navigation }) => {

  const [loginValue, setLoginValue] = useState('');
  const [pswdValue, setPswdValue] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const loginUser = async () => {
    setErrorMessage('');
    login(loginValue, pswdValue)
      .then(async (res) => {
        await setToken(res.auth_token);
        navigation.navigate('Profile');
      })
      .catch((err) => setErrorMessage(err.message));
  };

  Login function:

   const loginUser = async () => {
    setErrorMessage('');
    login(loginValue, pswdValue)
      .then(async (res) => {
        await setToken(res.auth_token);
        navigation.navigate('Profile');
      })
      .catch((err) => setErrorMessage(err.message));
  };