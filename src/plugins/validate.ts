export interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];

export const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const emailRules: RulesProp = [
  { type: "required", message: "邮箱不能为空" },
  { type: "email", message: "邮箱不合法" },
];
export const passwordRules: RulesProp = [
  { type: "required", message: "密码不能为空" },
];

export const titleRules: RulesProp = [
  { type: "required", message: "文章标题不能为空" },
];
export const contentRules: RulesProp = [
  { type: "required", message: "文章详情不能为空" },
];
