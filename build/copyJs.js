/*
 * @Author: dyr
 * @Description: copy原有的js文件
 * @Date: 2019-07-29 22:00:35
 * @LastEditors: dyr
 * @LastEditTime: 2019-07-30 10:57:46
 */

const gulp = require('gulp');
const path = require('path');
const cwd = process.cwd();
module.exports = function copyJson(filePath) {
  let file = 'src/**/*.js';
  let dist = 'dist';
  if (typeof filePath === 'string') {
    // 如果 直接使用传入的 file ， 生成的文件会直接拼接 dist + file
    // 必须使用绝对路径， 同时输出目录也要更改
    file = path.join(cwd, filePath);
    dist = path.dirname(file.replace(/src/, 'dist'));
  }
  return gulp.src([file]).pipe(gulp.dest(dist));
};
