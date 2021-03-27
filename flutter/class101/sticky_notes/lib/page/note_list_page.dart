import 'package:flutter/material.dart';
import 'package:sticky_notes/data/note.dart';
import 'package:sticky_notes/page/note_edit_page.dart';
import 'package:sticky_notes/page/note_page_args.dart';
import 'package:sticky_notes/page/note_view_page.dart';
import 'package:sticky_notes/providers.dart';

class NoteListPage extends StatefulWidget {
  static const routeName = '/';

  @override
  State createState() => _NoteListPageState();
}

class _NoteListPageState extends State<NoteListPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Sticky Notes'),
      ),
      body: FutureBuilder<List<Note>>(
        future: noteManager().listNotes(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            debugPrint('waiting: ${snapshot.connectionState}');
            return Center(
              child: CircularProgressIndicator(),
            );
          }

          if (snapshot.hasData) {
            debugPrint('hasData: ${snapshot.connectionState}');
            debugPrint('hasData2: ${snapshot.data}');
            List<Note> notes = snapshot.data;

            return GridView.builder(
              padding: EdgeInsets.symmetric(horizontal: 12.0, vertical: 16.0),
              itemCount: notes.length,
              itemBuilder: (context, index) {
                return _buildCard(notes[index]);
              },
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 1,
              ),
            );
          }

          debugPrint('snapshot: ${snapshot.connectionState}');
          debugPrint('snapshot: ${snapshot.data}');
          return Center(
            child: Text('오류가 발생했습니다.'),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        tooltip: '새 노트',
        onPressed: () {
          Navigator.pushNamed(context, NoteEditPage.routeName).then((value) {
            setState(() {});
          });
        },
      ),
    );
  }

  Widget _buildCard(Note note) {
    return InkWell(
      onTap: () {
        Navigator.pushNamed(context, NoteViewPage.routeName,
                arguments: NotePageArgs(note))
            .then((value) {
          setState(() {});
        });
      },
      child: Card(
        color: note.color,
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                note.title.isEmpty ? '(제목없음)' : note.title,
                style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 16.0,
              ),
              Expanded(
                child: Text(
                  note.body,
                  overflow: TextOverflow.fade,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
