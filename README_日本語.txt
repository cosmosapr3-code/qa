TERRACARD 専用オンライン接続サーバー

このセットはSupabaseを使いません。PeerJSの待ち合わせサーバーを自分専用にするためのファイルです。
Canvaの公開URLは変更せず、ゲームHTMLだけ差し替えます。

【必要な作業】
1. このZIPを展開し、中の4ファイルをGitHubの新しいリポジトリにアップロードします。
2. Renderのアカウントで「New +」→「Blueprint」を選び、そのGitHubリポジトリを接続します。
3. render.yamlの設定を確認してデプロイします。
4. デプロイ後に表示されるURL（例: terracard-peer-server.onrender.com）を控えます。
5. TERRACARD_オンライン修正版.htmlをテキストエディタで開き、
   YOUR-PEER-SERVER.onrender.com を実際のURLのホスト名に置き換えます。
   例: https://terracard-peer-server.onrender.com なら
       terracard-peer-server.onrender.com
   ※ https:// や末尾の / は入れません。
6. そのHTMLをCanva側で現在のゲームファイルと差し替えて公開し直します。

【確認】
デプロイ後、ブラウザで https://<Renderのホスト名>/peerjs を開き、PeerJSサーバーのJSON応答が返れば起動確認の目安です。
その後、Canvaの公開URLを2台で開いて、片方でルーム作成、もう片方で参加します。

注意:
・このチャットからRenderへの登録・デプロイは代行できません。
・無料プランは休止後の起動待ちが発生する場合があります。
・PeerServerは接続の待ち合わせだけを担当します。ゲーム通信は基本的に端末間で行われます。
・ネットワークによっては別途TURN中継が必要な場合があります。
・アカウントやコインの端末間共有機能はこの変更には含まれません。
