

let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = require("js_flutter.js");

const { SectionTitle } = require("./component/section_title.js");


class PageExampleAnimatedModalBarrier extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedModalBarrier');
  }

  createState() {
    return new PageExampleAnimatedModalBarrierState();
  }
}

class PageExampleAnimatedModalBarrierState extends MXJSWidgetState {

  constructor() {
    super();
  }
  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedModalBarrier'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedModalBarrier"),
          new SectionTitle("todo..."),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedModalBarrier,
};
