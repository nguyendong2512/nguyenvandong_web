const express = require('express');
const app = express();
app.use(express.json());

let videos = [
    {id : 1,title : 'video 1 ' , description : 'Đây là video đầu tiên '},
    {id : 2 ,title : 'video 2 ' , description : 'Đây là video thứ hai '},
];

// GET endpoint
app.get('/videos', (req, res) => {
  res.json({
     message: 'Danh sách video',
     videos : videos
  });
});

// POST endpoint
app.post('/videos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title và description là bắt buộc.' });
  }

  const newVideo = { id: videos.length + 1, title, description };
  videos.push(newVideo);

  res.status(201).json({
    message : 'Video mới đã được tạo',
    video: newVideo
  });
});

// PUT endpoint
app.put('/videos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title và description là bắt buộc.' });
    }

    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID không hợp lệ' });
    }

    // Tìm video theo ID
    const videoIndex = videos.findIndex(video => video.id === id);
    
    if (videoIndex !== -1) {
        videos[videoIndex] = { ...videos[videoIndex], title, description }; // Cập nhật thông tin video
        res.json({
            message: `Video có ID ${id} đã được cập nhật`,
            video: videos[videoIndex]
        });
    } else {
        res.status(404).json({ message: `Không tìm thấy video có ID ${id}` });
    }
});

// DELETE endpoint (Xóa video theo ID)
app.delete('/videos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID không hợp lệ' });
    }

    // Tìm video theo ID và xóa nó
    const videoIndex = videos.findIndex(video => video.id === id);
    
    if (videoIndex !== -1) {
        videos.splice(videoIndex, 1); // Xóa video khỏi mảng
        res.json({ message: `Video có ID ${id} đã bị xóa` });
    } else {
        res.status(404).json({ message: `Không tìm thấy video có ID ${id}` });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
