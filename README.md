<h1 align="center">Welcome to tutti-category-classification</h1>

> tutti-category-classification it is an attempt to classify insertions on the tutti.ch website automatically using NLP techniques.

### 🏠 [Homepage](https://github.com/filippofinke/tutti-category-classification)

### Data scraping

To build the dataset used in this project, the library https://github.com/filippofinke/tutti-api was used. This library allows you to interact with the tutti.ch API and extract all the information you need.

### Results

The model was trained to predict only 5 category classes: `electronics`,`sports`,`furniture`,`clothing`,`vehicles`.

#### LogisticRegression and CountVectorizer

```
              precision    recall  f1-score   support

    clothing       0.94      0.94      0.94      1485
 electronics       0.95      0.97      0.96      2216
   furniture       0.94      0.94      0.94      1658
      sports       0.93      0.91      0.92      1845
    vehicles       0.97      0.95      0.96      1304

    accuracy                           0.94      8508
   macro avg       0.94      0.94      0.94      8508
weighted avg       0.94      0.94      0.94      8508
```

### LogisticRegression and TfidfVectorizer

```
              precision    recall  f1-score   support

    clothing       0.94      0.93      0.94      1485
 electronics       0.93      0.98      0.96      2216
   furniture       0.95      0.93      0.94      1658
      sports       0.92      0.91      0.92      1845
    vehicles       0.97      0.95      0.96      1304

    accuracy                           0.94      8508
   macro avg       0.94      0.94      0.94      8508
weighted avg       0.94      0.94      0.94      8508
```

### MultinomialNB and CountVectorizer

```
precision    recall  f1-score   support

    clothing       0.85      0.96      0.90      1485
 electronics       0.93      0.97      0.95      2216
   furniture       0.95      0.86      0.90      1658
      sports       0.92      0.85      0.88      1845
    vehicles       0.95      0.96      0.96      1304

    accuracy                           0.92      8508
   macro avg       0.92      0.92      0.92      8508
weighted avg       0.92      0.92      0.92      8508
```

### Neural Network

```
              precision    recall  f1-score   support

    clothing       0.93      0.95      0.94      1759
 electronics       0.97      0.98      0.97      2675
   furniture       0.95      0.94      0.95      1982
      sports       0.93      0.93      0.93      2230
    vehicles       0.98      0.97      0.97      1563

    accuracy                           0.95     10209
   macro avg       0.95      0.95      0.95     10209
weighted avg       0.95      0.95      0.95     10209

```

### Neural Network with word embeddings

```
              precision    recall  f1-score   support

    clothing       0.82      0.85      0.84      1759
 electronics       0.90      0.87      0.89      2675
   furniture       0.78      0.83      0.81      1982
      sports       0.78      0.74      0.76      2230
    vehicles       0.84      0.86      0.85      1563

    accuracy                           0.83     10209
   macro avg       0.83      0.83      0.83     10209
weighted avg       0.83      0.83      0.83     10209
```

### dbmdz/bert-base-italian-xxl-uncased

```
              precision    recall  f1-score   support

    clothing       0.95      0.95      0.95      1759
 electronics       0.97      0.97      0.97      2675
   furniture       0.96      0.95      0.96      1982
      sports       0.93      0.94      0.94      2230
    vehicles       0.97      0.96      0.97      1563

    accuracy                           0.96     10209
   macro avg       0.96      0.96      0.96     10209
weighted avg       0.96      0.96      0.96     10209
```

## Conclusion

The best model was the `dbmdz/bert-base-italian-xxl-uncased` with an accuracy of 96%.

## Author

👤 **Filippo Finke**

- Website: https://filippofinke.ch
- Github: [@filippofinke](https://github.com/filippofinke)
- LinkedIn: [@filippofinke](https://linkedin.com/in/filippofinke)

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/filippofinke">
  <img src="https://github.com/filippofinke/filippofinke/raw/main/images/buymeacoffe.png" alt="Buy Me A McFlurry">
</a>

## 📝 License

Copyright © 2024 [Filippo Finke](https://github.com/filippofinke).<br />
