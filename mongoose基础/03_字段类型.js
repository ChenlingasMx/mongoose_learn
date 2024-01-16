//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

//3. 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/bibi");

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once("open", () => {
  let bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: String,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongoose.Schema.Types.Mixed,
  });

  let BookModel = mongoose.model("books", bookSchema);

  BookModel.create(
    {
      name: "西游记",
      price: 19,
      author: "吴承恩",
      is_hot: true,
      tags: ["鬼怪", "励志", "社会"],
      pub_time: new Date(),
      test: "abc",
    },
    (err, data) => {
      if (err) {
        console.log("err", err);
        return;
      } else {
        console.log("data", data);
        mongoose.disconnect();
      }
    }
  );
});

// 设置连接错误的回调
mongoose.connection.on("error", () => {
  console.log("连接失败");
});

//设置连接关闭的回调
mongoose.connection.on("close", () => {
  console.log("连接关闭");
});

//关闭 mongodb 的连接
// setTimeout(() => {
//   mongoose.disconnect();
// }, 2000)
