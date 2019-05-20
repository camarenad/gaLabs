db.presentations.update(
db.presentations.update(
    { 'content.assets._id': ObjectId('4fc63def5b20fb722900010e') },
    { 'content.assets._id': ObjectId('4fc63def5b20fb722900010e') },
    { $pull: { 'content.assets': { '_id': ObjectId('4fc63def5b20fb722900010e') } } }
    { $pull: { 'content.$.assets': { '_id': ObjectId('4fc63def5b20fb722900010e') } } }
)
)

db.presentations.update(
db.presentations.update(
{'content.assets._id': ObjectId('4fc63def5b20fb722900010e')}, 
{'content.assets._id': ObjectId('4fc63def5b20fb722900010e')}, 
{$pull: {'content.assets': {'_id': ObjectId('4fc63def5b20fb722900010e')}}}
{$pull: {'content.$.assets': {'_id': ObjectId('4fc63def5b20fb722900010e')}}}
)


)