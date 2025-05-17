<!DOCTYPE html>
<html>
<head>
    <title>Chatbot dengan Llama</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <h1>Chatbot LLaMA</h1>

    <form id="chat-form" method="POST" action="/ask-llama">
        @csrf
        <textarea name="prompt" rows="5" cols="60" placeholder="Tulis pertanyaanmu...">{{ old('prompt', session('prompt')) }}</textarea><br>
        <button type="submit">Kirim</button>
    </form>

    @if(session('response'))
        <div style="margin-top: 20px;">
            <strong>Jawaban:</strong>
            {{-- <p>{{ session('response') }}</p> --}}
            <textarea id="markdown" style="display:none;">{{ session('response') }}</textarea>
            <div id="preview"></div>
        </div>
    @endif
</body>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
    const markdown = document.getElementById('markdown').value;
    document.getElementById('preview').innerHTML = marked.parse(markdown);
</script>

</html>