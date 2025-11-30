/*                                                                  React notes
                                                               React as a functional
*/
/*                                                                REACT DEFINITION
                                                       ++++++++++++++++++++++++++++++++++


    👉 "React ek JavaScript library hai jo fast, simple aur scalable user interfaces banane ke liye use hoti hai. Ye component-based hai,
         Virtual DOM use karti hai aur declarative programming model follow karti hai."


         “React is a JavaScript library used to build fast, simple, and scalable user interfaces. It is component-based, uses Virtual DOM,
          and follows a declarative programming model.”

         🔹 React ke Key Points:

           #Component-based architecture
           
           UI ko chhote-chhote reusable components me todta hai.
           
           Example: Navbar, Footer, Button, Card etc.
           
           #Declarative
           
           Tum bas ye batao UI kaisa dikhna chahiye, React khud usko DOM me efficiently render karta hai.
           
           Virtual DOM
           
           React ek virtual copy of DOM banata hai aur sirf wahi part update karta hai jo change hua ho (fast performance).
           
          # Unidirectional Data Flow
           
           Data parent se child component me jata hai (props ke through).
           
          # JSX (JavaScript + XML)
           
           HTML aur JS ko ek hi file me likhne ka easy syntax deta hai.
 
*/

/*                                                              LIBRARY && FRAMEWORK
                                                      ++++++++++++++++++++++++++++++++++++++++


🔹 Library

English:
A library is a collection of reusable code that you can call to perform specific tasks. The developer controls the flow. Example: React, Lodash, jQuery.

Hinglish:
Library ek reusable code ka collection hota hai ya function ka jo  specific task karne me help karta hai. or jaha par tumhe import ya export dikh jaye 
to samjh lena vo ak library he kyo ki library predefind function ya code ka collection hote he or ye light weight hote he  Isme control developer 
ke haath me hota hai. or isme functions kam hote he or restriction bhi kam hote he  Example: React, jQuery.


🔹 Framework

English:
A framework provides a complete structure for building applications. It controls the flow and you have to follow its rules.
 Example: Angular, Django, Spring. collection of library its called framework

Hinglish:
Framework ek complete structure deta hai applications banane ke liye. Isme control framework ke haath me hota hai aur tumhe uske rules
 follow karne padte hain. Example: Angular, Django, Spring. ye size me balki hote he isme kuchh bhi install karn eki jarurat nahi hoti he 
 kyo ki already isme sab install hi rahta he isme restriction bhi rahta he or complex to understand .

 Application banane ke liye full structure provide karta hai.

Control framework ke haath me hota hai (inversion of control).

Opinionated hota hai – tumhe uske rules follow karne hote hain.

Multiple cheeze cover karta hai (routing, state, testing).

*/

/*                                                    DIFFERENCE BETWEEN FUNCTIONS AND COMPONENTS
                                             ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fUNCTION :

Function ek code block hota hai jo ek specific task karta hai.

Parameters leta hai aur output return karta hai.

Ye independent hota hai, UI se directly linked nahi hota.

COMPONENTS:

A component is a reusable piece of UI in React.

Returns JSX (UI elements).

Can have state and props.


“Function ek task perform karta hai aur value return karta hai, jabki component ek reusable UI piece hota hai jo JSX return karta hai 
aur props/state use karta hai.”


*/

/*                                                      DOCUMENT OBJECT MODEL (DOM   MOST IMP)
                                                    ++++++++++++++++++++++++++++++++++++++++++++++++++

DOM ka full form hai Document Object Model. Ye basically ek tree-like structure hai jo browser banata hai jab wo HTML page load karta hai. 
Matlab HTML ka jo bhi code likha hota hai (<html>, <head>, <body>, <p>, <div> etc.), browser usko ek tree ke form me convert kar deta hai 
jisme har tag ek node (object) ban jata hai. Root node hota hai <html>, uske andar child nodes hote hain jaise <head> aur <body>, aur unke
 andar aur nodes jaise <h1>, <p>, <a> etc.

DOM ka main kaam hota hai HTML document ko dynamic aur programmatically control karna. Iske through hum JavaScript ya kisi aur scripting 
language se HTML elements ko access, modify, add, delete ya style kar sakte hain. Example ke liye:

Text change karna (innerText / textContent)

HTML add karna (innerHTML)

Attributes set karna (setAttribute)

CSS change karna (style)

Naye elements create aur append karna (createElement, appendChild)

DOM basically ek interface deta hai jiske through hum HTML aur CSS ko runtime par manipulate kar pate hain.

👉 Simple line me: DOM ek bridge hai HTML document aur JavaScript ke beech, jo page ko interactive aur dynamic banata hai.



*/

/*                                                                   VIRTUAL DOM 
                                                     +++++++++++++++++++++++++++++++++++++

Virtual DOM (VDOM) React ka ek concept hai jo real DOM ka lightweight copy banata hai memory me. Jab bhi React me koi state ya props change hoti hai,
React pehle Virtual DOM me changes karta hai aur phir efficiently real DOM ko update karta hai, sirf wahi parts jaha changes hue hain. Isse web page
fast render hota hai aur unnecessary re-rendering se bachata hai. Virtual DOM basically ek memory-based representation hai HTML document ka, jisse React 
ke diffing algorithm (reconciliation) ka use karke changes ko efficiently calculate kiya jata hai. Ye approach performance improve karta hai aur web 
applications ko smooth aur responsive 
banata hai.

Virtual DOM React me real DOM ka lightweight copy hai, jisme changes pehle memory me hote hain aur phir efficiently real DOM update hota hai, 
isse performance fast hoti hai.

*/

/*                                                               RECONCILIATION PROCESS
                                                ++++++++++++++++++++++++++++++++++++++++++++
Reconciliation React ka process hai jo Virtual DOM aur Real DOM ke beech differences (diffs) detect karne ke liye use hota hai. Jab bhi state ya 
props change hote hain, React pehle Virtual DOM me naya tree banata hai aur phir purane Virtual DOM ke tree se compare karta hai. Is comparison
me React decide karta hai ki real DOM me exactly kaunse nodes ko update, add ya remove karna hai. Ye process React ko efficiently render karne
me help karta hai aur unnecessary updates ko avoid karta hai, isse app ka performance improve hota hai. Reconciliation ke liye React mostly 
“diffing algorithm” ka use karta hai aur simple rules follow karta hai, jaise: same type ke elements ko update kare, alag type ke element ko 
replace kare, aur lists me keys ka use kare taaki minimal changes ho.

👉 Simple line me:
Reconciliation ek process hai jisme React Virtual DOM aur purane Virtual DOM ko compare karke efficiently real DOM update karta hai, 
taaki app fast aur responsive rahe.
*/

/*                                                           Declarative && Imparative approach
                                    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Declarative approach me developer sirf “kya karna hai” batata hai, aur framework ya library decide karti hai “kaise karna hai”. 
Isme process automatically handle hota hai, code readable aur maintainable hota hai, aur unnecessary steps manually likhne ki zarurat nahi hoti.
 React me ye approach use hoti hai, jaise <p>{count}</p> — tum bas batate ho count display karna hai, aur React khud decide karta hai render kaise hoga.

Imperative approach me developer ko har step manually specify karna padta hai, matlab tumhe detail me batana padta hai ki element kaise create hoga, 
kaise text set hoga, kaise DOM me append hoga. Isme tum “how to do it” clearly define karte ho, aur process ka control tumhare haath me hota hai. 
Vanilla JavaScript me example hai: pehle element create karo, fir uska text set karo, fir parent me append karo — ye sab steps explicitly likhne 
padte hain.

👉 Simple line me:
Declarative me tum sirf “what” batate ho, framework handle karta hai “how”, Imperative me tum manually step-by-step “how” define karte ho.

*/

/*                                                             SPA (single page application)
                                         +++++++++++++++++++++++++++++++++++++++++++++++

                            ak esa application jiske andaar single html file hoti he use SPA kahte he 
*/

/*                                                                        JSX
                                                                  +++++++++++++++

JSX (JavaScript XML) React ka syntax extension hai jo JavaScript me HTML-like code likhne ka way deta hai. Iska matlab hai ki tum HTML elements
 ko directly JavaScript ke andar likh sakte ho, aur React usko JavaScript objects (React elements) me convert kar deta hai. JSX ka main purpose 
 hai code ko readable aur simple banana, taki UI components easily create aur maintain ho sakein. Ye purely optional hai, lekin React me mostly 
 JSX use hota hai kyunki ye code ko declarative aur concise banata hai. JSX me tum expressions {} ke andar use kar sakte ho, loops aur conditional 
 rendering apply kar sakte ho, aur saath hi JavaScript ki power bhi use kar sakte ho.

 👉 Simple line me:
JSX ek syntax hai jo HTML jaisa code JavaScript ke andar likhne ka way deta hai aur React usko JavaScript objects me convert karta hai.


*/ 

/*                                                                      Transpiller 
                                                              +++++++++++++++++++++++++++++++++++
                                               

Transpiler ek tool hai jo code ko ek language ya version se dusre language/version me convert karta hai, jaise Babel modern JS ko 
purane browsers ke liye convert karta hai. 
ak esa tool jo high level langauge se dusri high level lagauge ko conver tkarkta he 

*/

/*                                                                     REACT DOM
                                                           ++++++++++++++++++++++++++++++++

React DOM ek library hai jo React ke components ko real DOM me render karne ka kaam karti hai. Jab tum React me JSX ya components likhte ho, 
React DOM ye decide karta hai ki kaunse components ko browser me actual HTML elements me convert karna hai aur kaise efficiently update karna hai.
React DOM ke methods, jaise ReactDOM.render(), ye allow karte hain ki React component ko kisi specific HTML element ke andar render kiya ja sake.
Ye React ke Virtual DOM aur Reconciliation process ke sath milkar page ko fast aur interactive banata hai.

*/
/*                                                                 Create root method
                                                        ++++++++++++++++++++++++++++++++++++++++

👉 Simple line me:
createRoot ek method hai jo React 18 me app ka root container create karta hai aur usme component efficiently render karta hai, concurrent 
rendering support ke sath.

*/ 

/*                                                           STATE,STATELESS && ACTIVE STATE
                                           +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



==> State (स्टेट)
State ka matlab hai ek component ya application ke andar ka data jo time ke saath change ho sakta hai [1]. Jab state badalta hai, 
to user interface (UI) bhi update hota hai.
ui ke upper jo data dikhaiye data he vo state hoti he ya kisi bhi componnent ka current data of the componenet  par ye jo data aayega ye kis variable ki help se aayega 

    Simple Example: Imagine a counter button on a webpage. Har baar jab aap button par click karte hain, count badh jaata hai. 
    Yahaan par, current count hi us component ka state hai [1].
    ReactJS context mein: React mein, useState hook se aap state define karte hain. Jaise: const [count, setCount] = useState(0);.
     Yahaan count state hai aur setCount usko update karne ka function hai.


     state is the current data of the component (yaha par data kisi var ya obj se aana chhaiye)
==> stateless:

Stateless ka matlab hai ki ek component ya function koi bhi state store ya track nahi karta [1].   esa componentts only jo ki ui ko render karata he vo stateless components hota he 

jab me kisi ui par click karta hu or uska data change nahi hota he to vo stateless kahte he 


==>State active : state by default satateless hoti he par state ko active banane ke liye hooks introduce huye  agar kisi btn ke click hone par ui ka data change ho rha he to vo state active hoti he 

*/


/*                                                        react entry point.root level

*/

/*                                                            Hooks
                                                    ++++++++++++++++++
usestate hook:
 esa function jo kis libarary ke sath likhe huye aate he or predefined hote he unhe hook kahte he usesstate hook array of two paramaeters return karta he 
 or ye parameter hamesh [] bracket me likhe jate he jo pahla parameter hot he vo current state batata he or dusra variable state ko set karta he set ki help se 

 //useState hook is a hook by which we handle single state at a time it returns arrray of 2 parameters 1st parameter is initial value 
 // of the state and 2nd is function which is used to change the value of initial state
 
 
 
*/

/*                                                          Redux tool kit
                                                 ++++++++++++++++++++++++++++++++++

#1store: central repositry esai state ya esa data jo multu compo me use ho rahe hote he uska data yaha par hota he 
#2slice: kisi bhi compo ke features ki functionality jisse ki hamre code me yadi error aa rahi ho to hame pure code ko analyze nahi
karna padta he or ham is particular slice me hi errror dhundte he 
##jo kisi component se realted fetures ko  handle  karte he 
Reducer: means js ke function here basically operations like state create, update, delete ,adding  means crud oprations perform karna ho
Payload: agar apka event trigger hota he or kisi function ke calling ke time par a
Action: esa koi bhi kam joo user ke dwara kiya jata he 
useseelctor hook :
redux me ham direct kisi fun ko call nahi kar sakte he uske liye hame dispatch ki jarurat padhti he 


Definition: Redux ak global state Management library he  jiska use react application me kiya jata he , Redux  isliye aaya kyo ki jab kisi aap ka size bahut jyada badh jata he to ak components se dusre component 
me data ko pass karna muskil ho jata he isliye is problem ko solve karne ke liye redux  aaya redux toolkit bole to redux me kuchh new features add kar diye he jsse thodi code ki complexity ko 
kam kiya he isliye ab industry me redux tool kit ka use kiya jane laga he 
redux 

                                             ⚙️ Step 1: Install Redux Toolkit

                                             npm install @reduxjs/toolkit react-redux

 src/
 ┣ store/
 ┃ ┣ store.js
 ┃ ┗ counterSlice.js
 ┣ App.jsx
 ┣ main.jsx


 🧩 Step 1: Slice banao (counterSlice.js)
 // src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;


-----------------> yaha par dekhenge ki kya process ho rahi  he slice me  slice me ham kya kya create karte he 



                         import { createSlice } from "@reduxjs/toolkit";

👉 Ye line Redux Toolkit se createSlice function ko import karti hai.
Ye function hume Redux slice banane me help karta hai.
Slice basically ek small part of state + uske reducers (logic) hota hai.



                         const counterSlice = createSlice({

👉 Yahan hum ek slice create kar rahe hain jiska naam counterSlice rakha gaya hai.
Ye ek object accept karta hai jisme teen cheezein hoti hain:

    name

    initialState

    reducers

      name: "counter",

👉 name ek identifier hai jo batata hai ki ye slice kis kaam ke liye bana hai.
Is case me ye "counter" ke liye bana hai.
Redux ke andar ye name use hota hai jab hum actions dispatch karte hain (internally action type ke prefix me).


  initialState: { value: 0 },

👉 Ye slice ka starting data (initial state) define karta hai.
Yani jab app pehli baar chalegi to Redux store me ye default data hoga.
Yahan { value: 0 } matlab counter ki value initially 0 se start hogi.

  reducers: {

👉 reducers ek object hai jisme hum likhte hain functions
jo state ko change karte hain (update karte hain).
Reducers ke andar likhe har function ek action ban jata hai.

 increment: (state) => {
      state.value += 1;
    },

👉 Ye reducer function ka naam hai increment.
Jab hum ye action dispatch karenge (dispatch(increment())),
to ye function chalega aur state.value me 1 add karega.

   decrement: (state) => {
      state.value -= 1;
    },

👉 Ye reducer function ka naam hai decrement.
Ye state.value me se 1 subtract karega jab hum dispatch(decrement()) call karenge.


Ab createSlice() ek object return karega jisme:

actions (jaise increment, decrement)

reducer (main logic part)
maujood honge.

export const { increment, decrement } = counterSlice.actions;

👉 Yahan hum actions ko export kar rahe hain.
Ye automatically createSlice ke through ban jate hain.
Iska use hum component me karenge jab button click par action dispatch karna ho.

    dispatch(increment());
    dispatch(decrement());


    export default counterSlice.reducer;

👉 Ye slice ka main reducer export karta hai.
Ye reducer hum apne store.js me use karenge
taaki Redux store ko bataya ja sake ki counter slice ka logic yahan hai.


           summury table in slice 
           ================>>


           | Line                                    | Explanation                                        |
| --------------------------------------- | -------------------------------------------------- |
| `import { createSlice }`                | Redux Toolkit ka function import kar rahe hain     |
| `createSlice({...})`                    | Ek slice bana rahe hain (state + reducers)         |
| `name: "counter"`                       | Slice ka naam                                      |
| `initialState: { value: 0 }`            | Default state value                                |
| `reducers`                              | Functions jo state update karte hain               |
| `increment()`                           | Count +1 karta hai                                 |
| `decrement()`                           | Count -1 karta hai                                 |
| `export const { increment, decrement }` | Actions ko export karna                            |
| `export default counterSlice.reducer`   | Reducer ko store me use karne ke liye export karna |


----------------------------------------------------------------------------------------------------------------------------------------
step For store.js 
==================
              yaha par ham store ka setup samjh rahe he store me kya kar rahe h kyo ham import kar rahe he ye sab chije dekhenge 


              // src/store/store.js
                import { configureStore } from "@reduxjs/toolkit";
                import counterReducer from "./counterSlice";
                
                const store = configureStore({
                  reducer: {
                    counter: counterReducer,
                  },
                });
                
                export default store;

    import { configureStore } from "@reduxjs/toolkit";

👉 configureStore Redux Toolkit ka helper function hai jo store banata hai.

Ye bohot saari default cheezein auto-configure kar deta hai (Redux DevTools, good default middleware including redux-thunk, dev warnings).

Isliye manually createStore + middleware + devtools ko configure karne ki zaroorat nahi.





import counterReducer from "./counterSlice";

👉 Humne jo counterSlice banaya tha uska reducer yahan la rahe hain.

counterReducer ek function hai jo actions ke basis par state update karta hai.

Isko store me add karenge taaki app me state changes ho sakein.




const store = configureStore({ ... })

👉 Yahan hum actual Redux store bana rahe hain aur configureStore ko options de rahe hain.
store ek object hai jisme app ki poori global state aur methods (jaise dispatch, getState, subscribe) hoti hain.





reducer: { counter: counterReducer }

👉 Yeh bahut important line hai — isse kya hota hai:

reducer object ke keys decide karte hain store ki state shape (structure).

Key counter ka matlab: store ka ek slice hoga state.counter.

Value counterReducer batata hai ki state.counter ko kaise update karna hai.
Result: agar aap useSelector(state => state.counter.value) karoge to ye counter ki value dega.

{
  counter: { value: 0 }
}





(Extra) Agar aap multiple slices add karna chaho:

reducer: {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer
}
👉 Isse state ban jayega { counter: {...}, user: {...}, cart: {...} }.
export default store;

👉 Ye store ko default export karta hai taaki aap main.jsx me import karke React app ke saath connect kar sako (Provider ke through).



export default store;

👉 Ye store ko default export karta hai taaki aap main.jsx me import karke React app ke saath connect kar sako (Provider ke through).

-------------------------------------------------------------------------------------------------------------------------------------
                


*/

/*                                                          REDUX KI HELP SE API LAGANA 
                                                -----------------------------------------------------

REDUX ME HAME SABSE PAHLE API CALL KARNE KE LIYE HA  SABSE PAHLE createSlice or createAsyncThunk ko import  karna padega import kiya 

import { createSlice, createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { API_URL } from "../../utils/baseurl";

export const addbillingFields = createAsyncThunk("addbilling/addbillingFields",
    async(paramas,{getState,RejectedWithValue}) =>{
        
    }

)

ye syntax  he iska 

*/
/*                                                           Context API
                                                     ++++++++++++++++++++++++++
                             Context API React ka ek state management system hai
                             jo hume data ko ek component se doosre component me share karne deta hai
                             bina props drilling ke (matlab har level par props bhejne ki zarurat nahi).

                             Context API ek global storage jaisa hota hai, jahan tum common data rakh sakte ho
                             aur kisi bhi component me use kar sakte ho easily.

                    ⚙️ Why Context API Needed?

                    Normally React me data parent → child props ke zariye pass hota hai.
                    Lekin jab data ko bahut sare levels tak pass karna padta hai, to code messy ho jata hai.
                    Isi problem ko solve karta hai Context API by giving a global data sharing system.

                    ⚙️ Context API ka Flow (Step-by-Step)
                     🧩 Step 1: Context Create Karna
                      import { createContext } from "react";

                      export const MyContext = createContext();

                     
                     Pehle hame ek context object banana hota hai.
                     
                     Ye ek global store ki tarah kaam karta hai jahan ham data store karte hain.

                     🏠 Step 2: Context Provider Banana

                       import React, { useState } from "react";
                       import { MyContext } from "./MyContext";
                        
                        const MyProvider = ({ children }) => {
                          const [user, setUser] = useState("Vijay");
                        
                          return (
                            <MyContext.Provider value={{ user, setUser }}>
                              {children}
                            </MyContext.Provider>
                          );
                        };
                        
                       export default MyProvider;


                    Provider wo component hota hai jisme hum state hold karte hain aur children ko data bhejte hain.
                  

                    🔹 Kyu banate hain?
                     Provider ka kaam hai data ko apne niche ke components tak supply karna.

                     ⚛️ Step 3: App me Provider Wrap Karna

                     Ab ham apne App.js me Provider ko wrap karte hain taaki pura app uske data ko access kar sake.

                     import React from "react";
                     import MyProvider from "./MyProvider";
                     import Home from "./Home";
                     
                     function App() {
                       return (
                         <MyProvider>
                           <Home />
                         </MyProvider>
                       );
                     }
                     
                     export default App;
                     📥 Step 4: Data Consume Karna (useContext Hook)

                    Jahan data chahiye hota hai, wahan useContext hook ka use karte hain.

                    import React, { useContext } from "react";
                    import { MyContext } from "./MyContext";
                    
                    const Home = () => {
                      const { user, setUser } = useContext(MyContext);
                    
                      return (
                        <div>
                          <h1>Hello, {user}</h1>
                          <button onClick={() => setUser("Rahul")}>Change Name</button>
                        </div>
                      );
                    };
                    
                    export default Home;
                    

*/