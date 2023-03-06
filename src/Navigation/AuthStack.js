import navigationString from "./navigationString";
import * as Screens from "../Screens";

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationString.LOGIN}
        component={Screens.Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationString.SIGNUP}
        component={Screens.Signup}
        options={{ headerShown: false }}
      />
    </>
  );
}
