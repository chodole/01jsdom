import { ControllerMain } from "./_controllerMain.js";
import { MemberDAO } from "./_memberDAO.js";
import { BoardDAO } from "./_boardDAO.js";

// 여기가 시작지점이다. 
ControllerMain.start();
MemberDAO.start();
BoardDAO.start();