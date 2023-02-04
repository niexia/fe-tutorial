import { getAlgoSidebar } from './alog';
import { getFrontendEngineeringSideBar } from './frontend-engineering';
import { getNetworkSideBar } from './network'
import { getJavascriptSidebar } from './javascript-programming-languate'
import { getBrowserSidebar } from './javascript-browser';
import { getPerformanceOptimizationSideBar } from './javascript-performance-optimization';
import { getRegExpSidebar } from './javascript-regexp'


export default {
  '/javascript/programming-language/': getJavascriptSidebar(),
  '/javascript/browser/': getBrowserSidebar(),
  '/javascript/performance-optimization/': getPerformanceOptimizationSideBar(),
  '/javascript/regexp/': getRegExpSidebar(),
  '/algo/': getAlgoSidebar(),
  'network': getNetworkSideBar(),
  '/frontend-engineering/': getFrontendEngineeringSideBar(),
}