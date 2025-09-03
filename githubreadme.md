# github tutorial guide

## 1. Create GitHub Account

```
1.Go to GitHub ,sign up with email.
2.Choose username, password, verify.
3.GitHub = online place to store your code (remote repository).

```

---

## 2. What is Git?

- Git = a version control system.

- It keeps track of every change you make in your code.

- Helps multiple people work together without overwriting each other's work.

- You can go back in time to previous versions of your code.

- Think of it as a save button + history tracker + team collaboration tool.

---

## 3. Git vs GitHub

| Feature  | Git                   | GitHub                       |
| -------- | --------------------- | ---------------------------- |
| Type     | Tool (software)       | Website/service              |
| Function | Tracks code locally   | Stores code online           |
| Use      | Version control on PC | Collaboration, remote backup |
| Example  | git commit            | Push code to github.com      |

---

## 4. Branches – Why we need them?

- Branch = separate line of work.

- Example: You are working on feature-A but main code (main or master) is stable.

- Without branches → mess, everyone breaking each other’s code.

- With branches → safe experimentation.

```
git branch             # list branches

git branch new-feature  # create a new branch

git checkout new-feature # switch branch

git switch new-feature   # new version of checkout
```

## 5.Pull, Push, Merge, Rebase

- Pull → bring changes from remote to your PC.

- Push → send your changes to remote.

- Merge → combine a branch into another branch.

- Rebase → move your branch changes on top of another branch (keeps history clean).

## 6.Pull Request / Merge Request

```
git checkout -b feature-xyz   # create + switch branch
git checkout main             # switch back to main
```

---

## 7. Pull Request / Merge Request

PR = “Hey team, review my code. Can we merge it into main?”

On GitHub: you push your branch → click New Pull Request → review → merge.

## 8. How to create a PR

```
Push branch to GitHub:  git push origin feature-xyz

Go to GitHub → repository → Compare & pull request

Add description → Create PR

Team reviews → Merge
```

## 9. Origin / Setting Remote

```
git remote add origin <repo-URL>  # link local repo with GitHub

git remote -v  # see remotes

```

## 10. Staging, Working, Directory

```
Working Directory → your files on PC

Staging Area → files ready to be committed (git add)

Repository (local) → committed history (git commit)

```

## 11. Remote vs Local

| Type   | Location      | Example Command    |
| ------ | ------------- | ------------------ |
| Local  | Your PC       | git commit         |
| Remote | GitHub server | git push, git pull |

---

## 13. Cherry Picking

- Take specific commit from one branch to another.

- git cherry-pick  <commit-hash>



## 14. Stash / Stash Pop

Stash = temporarily hide your changes without committing.

Pop = restore them back.

## 15. .gitignore – “in your way”

```
.gitignore = tell Git to ignore certain files.

Example: you don’t want node_modules/ or secret keys to be tracked.

```