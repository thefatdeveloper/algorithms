import "./styles.css";
import { fib } from "./fibonacci_DP";
import { gridTraveller } from "./gridTraveller_DP";
document.getElementById("app").innerHTML = `Fib : ${fib(5)};
Grid Traveller:${gridTraveller(18, 18)}
`;
