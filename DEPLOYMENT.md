# Vercel デプロイ手順

## 1. Vercelアカウント作成
1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでサインアップ

## 2. プロジェクトをGitHubにプッシュ
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 3. Vercelでプロジェクトをインポート
1. Vercelダッシュボードで「Add New Project」をクリック
2. GitHubリポジトリを選択
3. プロジェクト設定:
   - Framework Preset: `Create React App`
   - Build Command: `yarn build`
   - Output Directory: `build`
4. 「Deploy」をクリック

## 4. GitHub Actionsの設定（自動デプロイ用）

### 必要なシークレット:
GitHubリポジトリの Settings > Secrets and variables > Actions で以下を追加:

1. **VERCEL_TOKEN**
   - Vercel Dashboard > Settings > Tokens で作成
   
2. **VERCEL_ORG_ID**
   - Vercelプロジェクトの `.vercel/project.json` から取得
   
3. **VERCEL_PROJECT_ID**
   - Vercelプロジェクトの `.vercel/project.json` から取得

### プロジェクトIDの取得方法:
```bash
# ローカルでVercel CLIをインストール
npm i -g vercel

# プロジェクトをリンク
vercel link

# .vercel/project.json が生成される
cat .vercel/project.json
```

## 5. デプロイ確認
- mainブランチにpushすると自動的にデプロイされます
- Vercelダッシュボードでデプロイ状況を確認できます

## カスタムドメインの設定（オプション）
1. Vercelダッシュボード > プロジェクト > Settings > Domains
2. カスタムドメインを追加
3. DNSレコードを設定

## 環境変数の設定（必要な場合）
Vercel Dashboard > プロジェクト > Settings > Environment Variables
