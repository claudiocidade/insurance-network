/***
 * Create a new asset
 * @param {org.maximinder.riskanalysis} asset
 * @transaction
 */

 async function createPrivateAsset(asset) {
     let assetRegistry = await getAssetRegistry('org.maximinder.riskanalysis.PrivateAsset');
     
     var factory = getFactory();

     num_id = (Math.floor(Math.random() * (999999 - 100000) + 100000)).toString(10);

     var assetId = asset.holder.id + num_id;

     var newAsset = factory.newResource('org.maximinder.riskanalysis', 'PrivateAsset', assetId);

     newAsset.holder = asset.holder;
     newAsset.type = asset.type;
     newAsset.value = asset.value;

     await assetRegistry.add(newAsset);
 }