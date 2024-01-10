 function copyText() {
            var textarea1 = document.getElementById("textarea1");
            var textarea2 = document.getElementById("textarea2");

            
            if (textarea1.value.trim() === "") {
                return;
            }

            
            textarea1.select();
            document.execCommand("copy");

            showNotification("Text copied to clipboard!");
        }

        function moveText() {
            var textarea1 = document.getElementById("textarea1");
            var textarea2 = document.getElementById("textarea2");

            // Check if there is text to move
            if (textarea2.value.trim() === "") {
                return;
            }

         
            textarea1.value = textarea2.value;

            
            textarea2.select();
            document.execCommand("cut");

            showNotification("Text moved to another textarea!");
        }

        function showNotification(message) {
            var notification = document.getElementById("notification");
            notification.innerHTML = message;
            notification.style.display = "block";

            setTimeout(function() {
                notification.style.display = "none";
            }, 2000);
        }