

  {{#if isUnderweight}}
      <h2>我的体重过轻</h2>
      <h3>我应该多吃含高脂肪的食品</h3>{{> highFatPercentFood}}
      <h3>我应该适当吃一些含超高脂肪的食品</h3>{{> superhighFatPercentFood}}
      <h3>我应该少吃含高胆固醇的食品</h3>{{> highCholestorelPercentFood}}
      <h3>我应该少吃含超高胆固醇的食品</h3>{{> superhighCholestorelPercentFood}}
    alert("\n你应该适当吃一些含高脂肪或超高脂肪的食品。" + "\n你应该少吃一些含高胆固醇或超高胆固醇的食品。");
  {{else}} 
    {{#if isInNormalRange}}
        <h2>我的体重正常</h2>
        <h3>我应该少吃含高胆固醇的食品</h3>{{> highCholestorelPercentFood}}
        <h3>我应该少吃含超高胆固醇的食品</h3>{{> superhighCholestorelPercentFood}}
    alert("\n你应该少吃一些含高胆固醇或超高胆固醇的食品。");
    {{else}}
      {{#if isOverweightAtRisk}}
          <h2>我的体重超重，有健康危险</h2>
          <h3>我应该少吃含高脂肪的食品</h3>{{> highFatPercentFood}}
          <h3>我应该少吃含超高脂肪的食品</h3>{{> superhighFatPercentFood}}
          <h3>我应该少吃含高饱和脂肪的食品</h3>{{> highSaturatedFatPercentFood}}
            <h3>我应该少吃含超高饱和脂肪的食品</h3>{{> superhighSaturatedFatPercentFood}}
            <h3>我应该少吃含高胆固醇的食品</h3>{{> highCholestorelPercentFood}}
            <h3>我应该少吃含超高胆固醇的食品</h3>{{> superhighCholestorelPercentFood}}
    alert("\n你应该少吃含高脂肪或超高脂肪的食品。" + "\n你应该少吃含高胆固醇或超高胆固醇的食品。");
        {{else}}
          {{#if isOverweightModeratelyObese}}
              <h2>我的体重超重，属于中度肥胖</h2>
              <h3>我应该少吃含高脂肪的食品</h3>{{> highFatPercentFood}}
              <h3>我应该少吃含超高脂肪的食品</h3>{{> superhighFatPercentFood}}
              <h3>我应该少吃含高饱和脂肪的食品</h3>{{> highSaturatedFatPercentFood}}
              <h3>我应该少吃含超高饱和脂肪的食品</h3>{{> superhighSaturatedFatPercentFood}}
              <h3>我应该少吃含高胆固醇的食品</h3>{{> highCholestorelPercentFood}}
              <h3>我应该少吃含超高胆固醇的食品</h3>{{> superhighCholestorelPercentFood}}
    alert("\n你应该少吃含高脂肪或超高脂肪的食品。" + "\n你应该少吃含高胆固醇或超高胆固醇的食品。");
          {{else}}
                <h2>我的体重超重，属于严重肥胖</h2>
                <h3>我应该少吃含高脂肪的食品</h3>{{> highFatPercentFood}}
                <h3>我应该少吃含超高脂肪的食品</h3>{{> superhighFatPercentFood}}
                <h3>我应该少吃含饱和脂肪的食品</h3>{{> highSaturatedFatPercentFood}}
                <h3>我应该少吃含超高饱和脂肪的食品</h3>{{> superhighSaturatedFatPercentFood}}
                <h3>我应该少吃含高胆固醇的食品</h3>{{> highCholestorelPercentFood}}
                <h3>我应该少吃含超高胆固醇的食品</h3>{{> superhighCholestorelPercentFood}}
    alert("\n你应该少吃含高脂肪或超高脂肪的食品。" + "\n你应该少吃含高胆固醇或超高胆固醇的食品。");