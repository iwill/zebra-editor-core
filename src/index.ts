// 组件工厂
import ComponentFactory from "./components";

// 内容生成器
import ContentBuilder from "./content/content-builder";
import HtmlBuilder from "./content/html-builder";
import { getBlockById } from "./components/util";

// 用户操作处理
import UserOperator from "./operator-user";

// 选区相关操作
import focusAt from "./operator-selection/focus-at";
import getSelection from "./operator-selection/get-selection";
import insertBlock from "./operator-selection/insert-block";
import insertInline from "./operator-selection/insert-inline";
import modifyDecorate from "./operator-selection/modify-decorate";
import modifySelectionDecorate from "./operator-selection/modify-selection-decorate";
import modifyTable from "./operator-selection/modify-table";
import modifyIndent from "./operator-selection/modify-indent";
import exchange from "./operator-selection/exchange";

// 操作内容
import mount from "./util/mount";
import createNewArticle from "./util/create-new-article";
import getHtml from "./util/get-html";
import getRawData from "./util/get-raw-data";
import createByRaw from "./util/create-by-raw";
import updateComponent from "./util/update-component";

// 文章历史相关
import { createRecord, undo, redo } from "./record/util";

// 一些快捷操作
export * from "./util/quick";

export {
  ComponentFactory,
  getBlockById,
  ContentBuilder,
  HtmlBuilder,
  UserOperator,
  focusAt,
  getSelection,
  insertBlock,
  insertInline,
  modifyDecorate,
  modifySelectionDecorate,
  modifyTable,
  modifyIndent,
  exchange,
  mount,
  createNewArticle,
  getHtml,
  getRawData,
  createByRaw,
  updateComponent,
  createRecord,
  undo,
  redo
};
