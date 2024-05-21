import { ControllerMain } from "./controllerMain.js";
import { JsonMemberList } from "./jsonMemberList.js";
import { JsonItemList } from "./jsonItemList.js";
import { JsonCartList } from "./jsonCartList.js";

JsonItemList.getInstance().init();
JsonMemberList.getInstance().init();
JsonCartList.getInstance().init();

ControllerMain.getInstance().init();