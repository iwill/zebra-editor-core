import Character from "../components/character";
import Collection from "../components/collection";
import { focusAt } from "../selection-operator";
import Paragraph from "../components/paragraph";

export const inParagraph = (
  event: KeyboardEvent,
  component: Paragraph,
  start: number,
  end: number = start
) => {
  let key = event.key;
  // 字符输入
  if (key.length === 1 && !event.ctrlKey && !event.altKey) {
    component.addChildren(new Character(key), start);
    // 以下内容非必要，强制更新 DOM 元素，使得表现一致。
    // event.preventDefault();
    // document.getElementById(component.id)?.replaceWith(component.getContent());
    // focusAt(component.id, end + 1);
    return;
  }
  // 触发删除
  if (key === "Backspace") {
    // 若为光标，则删除内容为往前一格
    // 若为选区，则不处理
    if (start === end) {
      start = start - 1;
    }
    // 移除选区内容
    component.removeChildren(start, end - start);
    // 以下内容非必要，强制更新 DOM 元素，使得表现一致。
    // event.preventDefault();
    // 更新 DOM 内容
    // document.getElementById(component.id)?.replaceWith(component.getContent());
    // 设置光标位置
    // focusAt(component.id, start);
    return;
  }
  // 触发换行
  if (key === "Enter") {
    // 移除选区内容
    component.removeChildren(start, end - start);
    // 将段落进行分段
    let subInfo = component.subParagraph(start);
    // 更新 DOM 内容
    event.preventDefault();
    // 段落带 ID 需进行 DOM 替换
    let oldDom = document.getElementById(component.id);
    if (oldDom?.nextElementSibling) {
      oldDom.parentElement?.insertBefore(
        subInfo.target[0].getContent(),
        oldDom.nextElementSibling
      );
    }
    oldDom?.replaceWith(component.getContent());
    // 设置光标位置
    focusAt(subInfo.target[0].id, 0);
    return;
  }
};

export const inImage = (event: KeyboardEvent, component: Collection<any>) => {
  let key = event.key;
  if (key === "Backspace") {
    component.removeSelf();
    let dom = document.getElementById(component.id);
    dom?.remove();
    return;
  }
};
